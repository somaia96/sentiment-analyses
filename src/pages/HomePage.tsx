import { Input } from "../components/ui/input"
import Company from "../components/Company"
import SelectTopic from "../components/Select"
import { useEffect, useState } from "react"
import getToken from "../utils/gitToken"
import { useMutation, useQuery } from "@tanstack/react-query"
import instance from "../api/instance"
import Alerting from "../components/Alert"
import { PlayIcon } from "lucide-react"
import { useToast } from "../hooks/use-toast"
import Toast from "../components/Toast"
import HomeSkeleton from "../components/Skeleton/HomeSkeleton"

const HomePage = () => {
  const [topic, setTopic] = useState({ id: 1, name: "",image:"" });
  const [sentiment, setSentiment] = useState("")
  const [newComment, setNewComment] = useState("")
  const [refresh, setRefresh] = useState(1)
  const { toast } = useToast();

  const { mutate, isSuccess, isError } = useMutation({
    mutationFn: (comment: { topic_id: number; content: string; }) => {
      return instance.post(`/comments`, comment, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getToken()}`,
        }
      })
    },
  });
  const { isLoading, error, data: comments } = useQuery({
    queryKey: [`comments-${topic?.name}-${sentiment}`, refresh],
    queryFn: async () => {
      const { data } = await instance.get(`/comments-by-topic?topic_name=${topic.name}&sentiment=${sentiment}`)
      setTopic(data.data[0].topic)
      return data.data
    }

  })

  useEffect(() => {
    if (isSuccess) {
      setRefresh(prev => ++prev)
      Toast("You Added A Comment 👏", "default", toast, "bg-blue-100");
    }
    if (isError) {
      Toast("Something Went Wrong ✖", "destructive", toast);
    }
  }, [isSuccess, isError, toast]);

  const handleAddComment = () => {
    mutate({
      topic_id: topic.id,
      content: newComment
    })
  }
  
  if (isLoading) return <HomeSkeleton />

  if (error) return <Alerting />

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col space-y-2 bg-purple-400 p-5 rounded-lg w-2/5">
        <SelectTopic topic={topic} setSentiment={setSentiment} setTopic={setTopic} />
        <Company setSentiment={setSentiment} company={topic} comments={comments} />
        <div className="relative">
          <Input value={newComment} onChange={(e) => setNewComment(e.target.value)} disabled={getToken() ? false : true} placeholder="Add Comment ..." className="focus-visible:ring-purple-800" />
          <PlayIcon onClick={handleAddComment} className="absolute border-2 w-8 h-8 rounded-md border-purple-400  text-purple-400 cursor-pointer right-2 top-1/2 -translate-y-1/2" />
        </div>
      </div>
    </div>
  )
}

export default HomePage
