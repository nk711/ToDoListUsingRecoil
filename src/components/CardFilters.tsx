import { Picker } from "@react-native-picker/picker"
import React from "react"
import { Text } from "react-native"
import { useRecoilState } from "recoil"
import { todoListFilterState } from "../recoil/store"

export const CardFilters = () => {

    const [filter, setFilter] = useRecoilState(todoListFilterState)

    const updateFilter = (value: string) => {
        setFilter(value)
    }

    return ( 
        <>
        <Text> Filter </Text>
        <Picker
            selectedValue={filter}
            onValueChange= {(value) => updateFilter(value)}>
            <Picker.Item label='Show All' value='All'/>
            <Picker.Item label='Show Completed' value='Completed'/>
            <Picker.Item label='Show Uncompleted' value='Uncompleted'/>
        </Picker>
        </>
    )
}