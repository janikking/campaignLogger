import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App(props) {
    const [page, setPage] = useState("home");
    const pages = ["Home", "Characters", "Gear", "Items", "World", "Owo"]
    let comment = page;
    useEffect(() =>{
        comment = page;
    });


    function handleChange(e){
        setPage(pages[e]);
    }

    let x = "wow"

    let changer = (w) =>{
        x = w;
    }

    let getPage = (x) =>{
        setPage(x);
    }


    return (
        <div className="App">
            <head>
                <title>SOEP</title>
            </head>
            <body>
                <header className="App-header">
                    <SideBar onChange={handleChange}/>
                </header>
                <div className="mainPage" >
                    <MainPage page={comment} />
                </div>
            </body>

        </div>
  );
}

function MainPage(props) {
    return(
        <div>
            <p4>{props.page}</p4>
        </div>
    );
}

const SideBar = (props) =>{
    const [item, setItem] = useState();
    const pages = ["Home", "Characters", "Gear", "Items", "World", "Owo"]
    let side = pages[item];

    useEffect(() => {
        side = pages[item];
        console.log(item);
    });




    let HandleClick = (e) =>{
        let click = parseInt(e.currentTarget.name);
        setItem(click);
        if(props.value !== click) {
            //handleChange(props.value);
            props.onChange(click);
        }
    }



    let closeNav = () => {
        document.getElementById("mySideBar").style.width = "0px";
    }
    let openNav = () => {
        document.getElementById("mySideBar").style.width = "10vw";
    }
    let decider = (x, y) =>{
        //page = x;
    }
    return(
        <section className="section">
            <button onClick={openNav}>side</button>
            <div className="headBar" id="mySideBar">

                <div className="headbarItem">
                    <a className="closebtn" name="0" onClick={closeNav} href="javascript:void(0)" id="balkArea"> <p1>{pages[0]}</p1> </a>

                </div>
                <div className="headbarItem"><a href="javascript:void(0)" id="balkArea" name="1" onClick={(e) => HandleClick(e)}> <p1>{pages[1]}</p1> </a>

                </div>
                <div className="headbarItem"><a href="javascript:void(0)" id="balkArea" name="2" onClick={(e) => HandleClick(e)}> <p1>{pages[2]}</p1> </a>

                </div>
                <div className="headbarItem"><a href="javascript:void(0)" id="balkArea" name="3" onClick={(e) => HandleClick(e)}> <p1>{pages[3]}</p1> </a>

                </div>
                <div className="headbarItem"><a href="javascript:void(0)" id="balkArea" name="4" onClick={(e) => HandleClick(e)}> <p1>{pages[4]}</p1> </a>

                </div>
                <div className="headbarItem"><a href="javascript:void(0)" id="balkArea" name="5" onClick={(e) => HandleClick(e)}> <p1>{pages[5]}</p1> </a>

                </div>
            </div>
        </section>
    );
}
export default App;
