/**
 * python 中有if __name__ =="__main__"的用法，js也可以
 * */
if (require && require.main == module) {
    console.log("I am main")
}