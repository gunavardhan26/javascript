///nestedfuntion
function main() {
    let a = "a";
    function child1() {
        console.log(a);

    }
    function child2() {
        console.log("child2");

    }
    function child3() {
        console.log("child 3");

    }
    return { child1, child2, child3 }
}
main().child1()
main().child2()
main().child3()