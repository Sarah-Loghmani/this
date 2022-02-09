// ! this
// console.log(this);//window

//?function
//*declarations functions
function a(){
  // console.log(this);
}
a();

//*declaration function nested in declaration function
function b(){
  const b1 = function(){
    // console.log(this);
  };
  b1();
}
b();

//*arrow function nested in declaration function
function c(){
  const c1 = ()=>{
    // console.log(this);//window
  }
  c1();
}
c();

// *arrow function


//* declaration function nested in arrow function =>window

// *arrow function nested in arrow function =>window

// ?method => function in object
lastName="loghmani";
firstName="sarah"

const test = {
  firstName: 'Bill',
  lastName: 'gates',
  age:75,

  //*declaration function ***********************************
  //first way
  fullName: function () {
    // console.log(this);//object
    return `${this.firstName} ${this.lastName}`
  },

  //second way
  fullName2(){
    // console.log(this);//object
    return `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`;
  },
 

  //*declaration function nested in declaration function
  greeting(){

    const b=function(){
      console.log(this);//window
    }
    b()
  },

  //*arrow function nested in declaration function
  greeting2(){

    const b=()=>{
      console.log(this);//object
      return `Hi dear ${this.fullName2()}`
    }
    return b()
  },


  //* arrow function*************************************
  funcArrow:()=>{
    console.log(this);//window
    return test.age
  },


  //* declaration function nested in arrow function
  birthDate:()=>{

    const a = function(){
      console.log(this);//window
    }
    a()
  },
 
  //* arrow function nested in arrow function
  birthDate2:()=>{
    const a =()=>{ 
      console.log(this)//window
    }
    a()
  }
  
};
console.log(test.fullName());
console.log(test.fullName2());
test.greeting()
console.log(test.greeting2());
console.log(test.funcArrow());
test.birthDate()
test.birthDate2();