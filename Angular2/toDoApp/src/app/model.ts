

export class Model{
    user:string;
    items:any[];

    constructor(){
        this.user="Yusuf";
        this.items=[
            new ToDoItem("Spor",true),
            new ToDoItem("Kahvaltı",false),
            new ToDoItem("Sinema",false)
          ]
    }
}

export class ToDoItem{
    description;
    action;

    constructor(description: string,action: boolean){
        this.description=description;
        this.action=action;
    }
}
