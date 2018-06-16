package com.integrate.todo.db;

import com.integrate.todo.TodoList;

public interface DBWrapperList {

    public TodoList createList(TodoList todoList);

    TodoList findListById(int id);
}