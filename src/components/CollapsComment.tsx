import * as React from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

import { Button } from "./ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible"
import { IComment } from "@/interfaces"

interface IProps {
  company: { id: number, name: string, comments: IComment[] };
}

export function CollapsibleDemo({ company }: IProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <CollapsibleTrigger asChild>
        <div className="rounded-md border py-2 font-mono border-purple-400 text-purple-700 text-sm flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">
            {company.name}
          </h4>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            {isOpen ? <ChevronUp color="purple" className="h-4 w-4" /> :
              <ChevronDown color="purple" className="h-4 w-4" />}
            <span className="sr-only">Toggle</span>
          </Button>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        {company.comments.map((comment: IComment) => (
          <div key={comment.id}
            style={{ borderColor: comment.sentiment === 'positive' ? "green" : "red" }}
            className="rounded-md border-purple-100 text-gray-800 border px-4 py-3 font-mono text-sm">
            {comment.content}
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}
