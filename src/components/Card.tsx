import React from "react";
import { Button, TextInput } from "react-native";
import CheckBox from '@react-native-community/checkbox'
import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/store";
import { CardItem } from '../recoil/store'

const replaceItemAtIndex = (arr: CardItem[], index: number, val: CardItem) => {
    return [...arr.slice(0, index), val, ...arr.slice(index+1)];
}

const removeItemAtIndex = (arr: CardItem[], index: number) => {
    return [...arr.slice(0, index), ...arr.slice(index+1)]
}

export const Card = ({item} : any) => {
    const [cardList, setCardList] = useRecoilState(todoListState);
    const index= cardList.findIndex((card: CardItem)=> card === item)

    const editItemText = (text: string) => {
        const newList = replaceItemAtIndex(cardList, index, {
            ...item,
            todo: text,
        });

        setCardList(newList)
    }

    const toggleComplete = () => {
        const newList = replaceItemAtIndex(cardList, index, {
            ...item,
            isComplete: !item.isComplete,
        });
        setCardList(newList);
    };

    const deleteItem = () => {
        const newList = removeItemAtIndex(cardList, index);
        setCardList(newList)
    }

    return ( <>
        <TextInput
            value ={item.todo} 
            onChangeText={ text => editItemText(text) }/>
        <CheckBox
            value = {item.isComplete}
            onValueChange = { toggleComplete }
        />
        <Button onPress= {deleteItem} title = 'Delete'/>
        </>
    )

}