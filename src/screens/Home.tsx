import React, { useState } from "react";
import { Button, Text, TextInput } from "react-native";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { AddCard } from "../components/AddCard";
import { Card } from "../components/Card";
import { todoListState } from "../recoil/store";

export const Home = () => {
    const todoList = useRecoilValue(todoListState);
    return (<>
            
                <AddCard/>
                { todoList.map((item)=> (
                    <Card key = {item.key} item = {item}>
                        {item}
                    </Card>
                ))}
            </>)
}


