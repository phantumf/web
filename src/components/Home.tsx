import { useState } from 'react';
const games_list = ['CSGO', 'ReadyOrNot', 'Phasmophobia', 'Simrail'];
const hobby_list = ['programing', 'EMS', 'girls', 'cars', 'electronics', 'weapons', 'night'];
const tools_list = ['cpp', 'c', 'cs', 'go', 'ts', 'js', 'html', 'lua', 'react'];

const timestamp = 1190334239000;

const ColorView = (props: { color: string; text: string }) => (
    <span style={{color: props.color}}>{props.text}</span>
)

const Redirect = (props: { name: string, href: string }) => (
    <a href={props.href}>/{props.name}</a>
)

const Home = () => {
    const [age, setAge] = useState('--');

    setInterval(() => {
        const now = Math.round(Date.now() / 1000);
        const age = (now - (timestamp / 1000)) / 3600 / 24 / 365;
        setAge(age.toFixed(10));
    }, 500)

    return (
        <>
            <div className="main-bg">
                <div className="card">
                    <div className="height-45" />
                    <div className="avatar">
                        <img className='avatar' width="128" height="128" src='./avatar.png' />
                    </div>
                    <div className="height-30" />
                    <div className="card-content">
                        <div className="padding-top-15" />
                        <h1 className="card-title">Aleks</h1>
                        <p className='card-content margin-0 fa-12'>i'm {age} yo</p>
                        <p className='card-content margin-0 fa-12'>i love <ColorView color='pink' text='C++' /></p>

                        <p className='card-content margin-0 fa-12'>i like {hobby_list.map<React.ReactNode>(obj => <ColorView color='fuchsia' text={obj} />).reduce((prev, curr) => [prev, ', ', curr])}</p>
                        <p className='card-content margin-0 fa-12'>i use {tools_list.map<React.ReactNode>(obj => <ColorView color='cyan' text={obj} />).reduce((prev, curr) => [prev, ', ', curr])}</p>
                        <p className='card-content margin-0 fa-12'>i play {games_list.map<React.ReactNode>(obj => <ColorView color='crimson' text={obj} />).reduce((prev, curr) => [prev, ', ', curr])}</p>

                        <br />
                        <div className="redirects">
                            <Redirect href='https://github.com/phantumf/' name='github'/>
                            <Redirect href='https://discord.com/users/1085638148148699187/' name='discord_user'/>
                            <Redirect href='https://discord.gg/2apRS9aSAV' name='discord_server'/>

                        </div>
                        <div className="padding-bottom-30" />
                    </div>
                </div>
            </div>
        </>
    );
}

export { Home };