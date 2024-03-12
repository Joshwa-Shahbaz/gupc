import ContainerWrapper from "@/components/ContainerWrapper";
import { array } from "@/container/TopicsList";
import React from "react";

type array = {
  id: string;
  title: string;
  description: string;
};

export async function getServerSideProps(context: { params: { id: string } }) {
  const { id } = context.params;

  const item = array.find((item) => item.id === id);

  if (!item) {
    console.log("page not found");
    // return {
    //   //   notFound: true,
    // };
  }

  return {
    props: {
      item,
    },
  };
}

const EditTopic = ({ item }: { item: array }) => {
  return (
    <ContainerWrapper>
      <div className="mt-5">
        <h1>Edit Topic: {item.id}</h1>
        <h1>Edit Topic: {item.title}</h1>
        <p>Edit Topic: {item.description}</p>
      </div>
    </ContainerWrapper>
  );
};

export default EditTopic;
