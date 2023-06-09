import { Link } from "react-router-dom";

const Redirect = (props: { name: string, href: string }) => props.href.includes('https') ? <a href={props.href}>{props.name}</a> : <Link to={props.href}>{props.name}</Link>


const Home = () => {
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
                        <p className='card-content margin-0 fa-12'>Welcome to my site.</p>

                        <br />
                        <div className="redirects">
                        <Redirect href='https://discord.gg/2apRS9aSAV' name='My discord' />
                            <p className='card-content margin-0 fa-12'>|</p>
                            <Redirect href='https://github.com/phantumf/' name='My github' />
                            <p className='card-content margin-0 fa-12'>|</p>
                            <Redirect href='/safely' name='Contact me safely' />
                        </div>
                        <div className="padding-bottom-30" />
                    </div>
                </div>
            </div>
        </>
    );
}

export { Home };