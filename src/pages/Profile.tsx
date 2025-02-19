import { useQuery } from "@tanstack/react-query"
import { CollapsibleDemo } from "../components/CollapsComment"
import instance from "../api/instance"
import Alerting from "../components/Alert"
import { IComment } from "@/interfaces"
import getToken from "../utils/gitToken"
import ProfileSkeleton from "../components/Skeleton/ProfileSkeleton"

const Profile = () => {

  const { isLoading, error, data } = useQuery({
    queryKey: [`usercomments`],
    queryFn: async () => {
      const { data } = await instance.get(`/topics-with-user-comments`,{
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getToken()}`,
        }
      })
      return data.data
    }
  })
  
  if (isLoading) return <ProfileSkeleton />

  if (error) return <Alerting />

  return (
    <div>
      <h2 className="my-5 font-semibold text-lg text-gray-800">
        Your Comments About These Companies :
      </h2>
      <div className="space-y-2">
        {
          data.map((company:{id:number,name:string,comments:IComment[]})=><CollapsibleDemo company={company} key={company.id} />)
        } 
      </div>
    </div>
  )
}

export default Profile
