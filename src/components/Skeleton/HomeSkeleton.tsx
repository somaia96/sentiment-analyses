import { Skeleton } from "../ui/skeleton"
const HomeSkeleton = () => {
    return (
        <Skeleton className="space-y-8 m-auto p-5 flex-col md:space-y-0 md:flex md:items-center w-96">
            <Skeleton className="h-9 rounded-md w-full mb-4" />
            <Skeleton className="flex items-center justify-center w-full h-48 rounded">
                <svg className="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
            </Skeleton>
            <div className="w-full">
                <Skeleton className="h-9 rounded-md w-full my-4" />
                <Skeleton className="h-20 space-y-1 p-3 rounded-md  mb-2.5">
                    <div className="w-32 h-4 bg-gray-400 rounded-sm"></div>
                    <div className="w-64 h-4 bg-gray-400 rounded-sm"></div>
                    <div className="w-60 h-4 bg-gray-400 rounded-sm"></div>
                </Skeleton>
                <Skeleton className="h-24 space-y-1 p-3 rounded-md  mb-2.5">
                    <div className="w-32 h-4 bg-gray-400 rounded-sm"></div>
                    <div className="w-64 h-4 bg-gray-400 rounded-sm"></div>
                    <div className="w-60 h-4 bg-gray-400 rounded-sm"></div>
                </Skeleton>
                <Skeleton className="h-24 space-y-1 p-3 rounded-md  mb-2.5">
                    <div className="w-32 h-4 bg-gray-400 rounded-sm"></div>
                    <div className="w-64 h-4 bg-gray-400 rounded-sm"></div>
                    <div className="w-60 h-4 bg-gray-400 rounded-sm"></div>
                </Skeleton>
            </div>
            <Skeleton className="h-9 rounded-md w-full mb-4" />
        </Skeleton>
    )
}

export default HomeSkeleton
