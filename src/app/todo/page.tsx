"use client";

import Form from "@/components/Form";
import Todo from "@/components/Todo";
import { Todo as TodoType } from "@/types";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

import React, { useState } from "react";

const FormPage = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleSubmit = (todo: TodoType) => {
    setTodos((prev) => {
      return [...prev, todo];
    });
  };

  const handleRemoveAllDone = () => {
    const filteredTodos = todos?.filter((todo) => !todo.isDone);
    setTodos(filteredTodos);
  };

  const handleUpdate = (todo: TodoType, id: number) => {
    const updatedTodos = todos?.toSpliced(id, 1, todo);
    setTodos(updatedTodos);
  };

  const handleDelete = (id: number) => {
    const newTodos = todos?.toSpliced(id, 1);
    setTodos(newTodos);
  };

  const TODOS = todos?.map((todo, i) => (
    <Todo
      id={i}
      todo={todo}
      onDelete={handleDelete}
      onUpdate={handleUpdate}
      key={i}
    />
  ));
  const IS_EMPTY = TODOS?.length === 0;

  return (
    <Container
      maxW="container.lg"
      h="100vh"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      bg="#EFEFEF"
    >
      <Center padding="1rem">
        <Card>
          <CardHeader>
            <Heading>Todo Lists</Heading>
            <Text fontSize="sm" color="gray.500">
              Manage your tasks efficiently
            </Text>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit} />
            <Divider />
            {/* TODOS */}
            <Flex flexDir="column" gap="8px" paddingBlock="1rem">
              {IS_EMPTY ? (
                <Text color="gray.300" textAlign="center">
                  No tasks yet
                </Text>
              ) : (
                TODOS
              )}
            </Flex>
          </CardBody>
          <CardFooter>
            <Button w="full" onClick={handleRemoveAllDone} colorScheme="red">
              Clear completed
            </Button>
          </CardFooter>
        </Card>
      </Center>
    </Container>
  );
};

export default FormPage;
