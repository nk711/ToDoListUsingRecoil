import React, { useState } from "react";
import { Button, TextInput } from "react-native";
import { atom, useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/store";

export const AddCard = () => {
    const [input, setInput] = useState('');
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = () => {
        setTodoList((list) => [
            ...list,
            {
                key: Math.random(),
                todo: input,
                isComplete: false
            },
        ]);
        setInput('')
    }

    const onChange = (val: string) => {
        setInput(val)
        console.log(input)
    }

    return (
        <>
            <TextInput
                value ={input} 
                onChangeText={ text => onChange(text) }/>
            <Button onPress= {addItem} title = 'Add'/>
        </>
    )
}