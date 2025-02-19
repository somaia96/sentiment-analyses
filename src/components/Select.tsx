import { memo } from "react";
import instance from "../api/instance";
import Alerting from "./Alert";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { useQuery } from "@tanstack/react-query";

interface IProps{
  setTopic:(val:{id:number,name:string,image:string})=>void;
  setSentiment:(val:string)=>void;
  topic:{id:number,name:string,image:string};
}

const SelectTopic=({setTopic,setSentiment,topic}:IProps)=> {

  const { isLoading, error, data:topics } = useQuery({
    queryKey: [`topics`],
    queryFn: async () => {
      const { data } = await instance.get(`/topics`)
      // if(!topic.name) setTopic(data.data[0])
      return data.data
    }
  })
  
  if (isLoading) return <h2>Loading</h2>

  if (error) return <Alerting />

  return (
    <Select value={`${topic.id - 1}`} onValueChange={(value)=>{setTopic(topics[+value]);setSentiment("")}} >
      <SelectTrigger className="bg-white">
        <SelectValue placeholder="Toyota" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup >
          {
            topics.map((company:{id:number,image:string,name:string},i:number)=><SelectItem key={company.id} value={`${i}`}>{company.name}</SelectItem>)
          }
          
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
export default memo(SelectTopic)