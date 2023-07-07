import { WorkoutContext } from "../context/WorkoutContext";
import { useContext} from "react";

export default function useWorkoutsContext() {
    const context= useContext(WorkoutContext)
    if(context === undefined) {
        throw new Error('useWorkoutsContext must be used within a WorkoutProvider')
    }
    return context
}