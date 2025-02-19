import { Skeleton } from "../ui/skeleton"
const ProfileSkeleton = () => {
    return (
        <>
            <Skeleton className="h-5 rounded-md w-80 mt-10 mb-4" />

            <Skeleton className="h-12 rounded-md flex items-center p-3 w-96 mb-4" >
                <div className="bg-gray-400 w-40 rounded-sm h-4"></div>
            </Skeleton>
            <Skeleton className="h-12 rounded-md flex items-center p-3 w-96 mb-4" >
                <div className="bg-gray-400 w-40 rounded-sm h-4"></div>
            </Skeleton>
            <Skeleton className="h-12 rounded-md flex items-center p-3 w-96 mb-4" >
                <div className="bg-gray-400 w-40 rounded-sm h-4"></div>
            </Skeleton>
        </>
    )
}

export default ProfileSkeleton
