import { IComments } from "@/interfaces";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "./ui/select"

interface IProps {
    company: { id: number, name: string,image:string };
    comments: IComments[];
    setSentiment:(val:string)=>void
}

const Company = ({ company, comments,setSentiment }: IProps) => {
    return (
        <div>
            <div className="my-3 h-auto md:h-40 flex justify-center items-center overflow-hidden">
                <img
                    src={company.image} 
                    alt={company.name}
                    className="object-cover h-full w-auto" />
            </div>
            <div
                style={{ scrollbarColor: "#e2a7fb white", scrollbarWidth: "thin" }}
                className="bg-gray-100 p-3 relative space-y-2 rounded-md h-96 overflow-y-scroll"
            >
                <Select  onValueChange={(value)=>setSentiment(value)}>
                    <SelectTrigger className="bg-white text-gray-800">
                        <SelectValue placeholder="Positive/Negative Comments" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>All Comments</SelectLabel>
                            <SelectItem value="positive">Positive</SelectItem>
                            <SelectItem value="negative">Negative</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {
                    comments.length ? comments.map((comment) => {
                        return (
                            <div
                                style={comment.sentiment === "negative" ?
                                    { backgroundColor: "#ffdada", borderColor: "red" } :
                                    { backgroundColor: "#b2ffb2", borderColor: "green" }}
                                key={comment.id} className="flex justify-between space-x-2 items-center p-2 border rounded-md border-purple-500">
                                <div>
                                    <h2
                                        className="text-purple-800 font-semibold">{comment.user.name}</h2>
                                    <p className="text-gray-900">{comment.content}</p>
                                </div>
                                <div>
                                    {
                                        comment.sentiment === "negative" ? <>😤</> : <>😎</>
                                    }
                                </div>
                            </div>
                        )
                    }) : <div>
                        <h2 className="text-purple-800 mt-3 font-semibold">
                            No Comments Yet !
                        </h2>
                        <p className="text-gray-900 text-xs">Add The First One</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Company
