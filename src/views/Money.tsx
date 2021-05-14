import Layout from "../components/Layout";
import React,{useState} from "react";
import styled from "styled-components";
import {TagsSection} from "../Money/TagsSection";
import {NotesSection} from "../Money/NotesSection";
import {CategorySection} from "../Money/CategorySection";
import {NumberPadSection} from "../Money/NumberPadSection";
import {useRecords} from "hooks/useRecords"

const CategoryWrapper = styled.div`
  background-color: #c4c4c4;
`;

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
  const {addRecord} = useRecords();
  const submit = () => {
    if(addRecord(selected)){
      alert('保存成功');
      setSelected(defaultFormDate) //保存成功后置空
    }
  }
    return (
        <MyLayout scrollTop={999}>
            {JSON.stringify(selected)}
           <TagsSection value={selected.tagIds} onChange={(tagIds)=>setSelected({...selected,tagIds:tagIds})}/>
           <NotesSection value={selected.note} onChange={(note)=>setSelected({...selected,note:note})}/>
           <CategoryWrapper>
           <CategorySection value={selected.category} onChange={(category)=>setSelected({...selected,category:category})}/>
           </CategoryWrapper>
           <NumberPadSection value={selected.amount} onChange={(amount)=>setSelected({...selected,amount:amount})} onOK = {submit}/>
        </MyLayout>
    );
}
export default Money;