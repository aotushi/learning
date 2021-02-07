// 03.条件声明
/*
   更新:翻译是外包的吗? 我这个三把刀都觉得难以下咽.
   在使用var声明变量时,由于声明会提升,JavaScript会自动将多余的声明在顶部合并为一个声明.
    因为let的作用域是块,所以不可能检查前面是否使用let声明过同名变量,同时也就不可能在没有声明的情况下声明它.

    中文版最后一句翻译的不合适,英文版:
    Because declarations are scoped to blocks, it’s not possible to check if a let variable has previously been declared and conditionally declare it only if it has not.
*/
<script>
    if(typeof name === 'undefined'){
        let name;
        //  name is restricted to the if{ } block scope, so this assignment will act as a global assignment.
    }
    name = 'Matt';

    try(age){
        // if age is not declared, this will throw an error.
    } catch(error) {
        let age;
        // age is restricted to the catch{ } block scope, so this assignment will act as a global assignment.
    }
    age = 26;

</script>