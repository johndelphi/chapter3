//magic eight ball
var userName='';
userName='tom';
userName?console.log(`hello: ${userName}`):
console.log('hello');
let userQustion ='I will be a gorilla tonight?';
console.log(`the user asked:${userQustion}`);
let randomNumber;
randomNumber= math.floor(Math.random()*4);
let eightbal='';
switch (randomNumber) {
    case 0:
        eightbal=0
        break;
        case 1:
            eightbal=1
            break;
            case 2:
                eightbal=2
                break;
                case 3:
                eightbal=3
                break;
                case 4:
                    eightbal=4
                    break;

    default: 
    eightbal=3;
        break;
}
console.log(eightbal);