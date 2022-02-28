import { Picker } from "@react-native-picker/picker"
import React from "react"
import { Text } from "react-native"
import { useRecoilState, useRecoilValue } from "recoil"
import { todoListFilterState, todoListStatsState } from "../recoil/store"

export const CardStats = () => {

    const {
        total,
        totalCompleted,
        totalUncompleted,
        percentCompleted
    } = useRecoilValue(todoListStatsState)

    const formattedPercentCompleted = Math.round(percentCompleted)
    
    return ( 
        <>
            <Text> * Total items: {total}</Text>
            <Text> * Items completed: {totalCompleted}</Text>
            <Text> * Items not completed: {totalUncompleted}</Text>
            <Text> * Percent completed: {formattedPercentCompleted}</Text>
        </>
    )
}