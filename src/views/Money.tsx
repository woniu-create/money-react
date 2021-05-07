import Layout from "../components/Layout";
import React,{useState,useEffect} from "react";
import styled from "styled-components";
import {TagsSection} from "../Money/TagsSection";
import {NotesSection} from "../Money/NotesSection";
import {CategorySection} from "../Money/CategorySection";
import {NumberPadSection} from "../Money/NumberPadSection";
import {useRecords} from "hooks/useRecords"

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
type Category = '-' | '+'

const defaultFormDate = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
}

function Money() {
  const [selected,setSelected] = useState(defaultFormDate)
  const {records,addRecord} = useRecords();
  const submit = () => {
    if(addRecord(selected)){
      alert('保存成功');
      setSelected(defaultFormDate) //保存成功后置空
    }
  }
  useEffect(()=>{
    setTimeout(()=>{
      console.log('时间到');
      setSelected({...selected,amount:1000})
    },3000);
  },[])
    return (
        <MyLayout>
            {JSON.stringify(selected)}
           <TagsSection value={selected.tagIds} onChange={(tagIds)=>setSelected({...selected,tagIds:tagIds})}/>
           <NotesSection value={selected.note} onChange={(note)=>setSelected({...selected,note:note})}/>
           <CategorySection value={selected.category} onChange={(category)=>setSelected({...selected,category:category})}/>
           <NumberPadSection value={selected.amount} onChange={(amount)=>setSelected({...selected,amount:amount})} onOK = {submit}/>
        </MyLayout>
    );
}
export default Money;