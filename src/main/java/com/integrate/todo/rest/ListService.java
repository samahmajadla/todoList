package com.integrate.todo.rest;

import com.integrate.todo.TodoList;
import com.integrate.todo.db.DBWrapperList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public class ListService {

        private DBWrapperList database;

        @Autowired
        public ListService(DBWrapperList database ) {
            this.database = database;
        }


        public TodoList getList(Integer id) {
            return database.findListById(id);
        }

        public TodoList createTodoList(TodoList todoList) {
            return database.createList(todoList);
        }


        public TodoList updateList(int i, String newTitle) {
            return null;
    }
}



