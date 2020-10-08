import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

const TodoList = ({todos,toggleTodo}) => (
    <View style={{padding:20}}>
    {
    (todos && todos.length>0)?
    todos.map((todo) =>
      <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
            <Text style={{
                fontSize:24,
                textDecorationLine:todo.completed?'line-through':'none',
            }}>
                {todo.text+" "+todo.id}
            </Text>
            </TouchableOpacity>
        )

        :null
    }
    </View>
    )
export default TodoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});