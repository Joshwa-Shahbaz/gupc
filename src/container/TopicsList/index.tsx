import ContainerWrapper from "@/components/ContainerWrapper";
import RemoveBtn from "@/components/UI/RemoveBtn";
import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";

export const array = [
  {
    id: "1",
    title: "gold digger",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.s",
  },
  {
    id: "2",
    title: "gold digger",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.s",
  },
  {
    id: "3",
    title: "gold digger",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.s",
  },
  {
    id: "4",
    title: "gold digger",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.s",
  },
];

const TopicList = () => {
  return (
    <ContainerWrapper>
      {array.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              border: "2px solid black",
              padding: "24px 16px",
            }}
            className="flex justify-between mt-5"
          >
            <div>
              <h2
                style={{
                  fontSize: "32px",
                }}
              >
                {item.title}
              </h2>
              <div>
                <p
                  style={{
                    width: "80%",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
            <div
              style={{
                display: " flex",
                gap: "10px",
                justifyContent: "flex-start",
              }}
            >
              <div>
                <RemoveBtn />
              </div>
              <div>
                <Link href={`/editTopic/${item.id}`}>
                  <FaEdit size={30} />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </ContainerWrapper>
  );
};

export default TopicList;
