import PolygonW from './img/Polygon-white.png'
import PolygonB from './img/Polygon-black.png'
import icon from './img/icon.png'
import logo from './img/logo.png'
import riotgames from './img/riot games.png'
import Pers1 from './img/Pers1.png'
import Pers2 from './img/Pers2.png'
import Pers3 from './img/Pers3.png'
import Pers4 from './img/Pers4.png'
import skill1 from './img/skill1.png'
import skill2 from './img/skill2.png'
import skill3 from './img/skill3.png'
import skill4 from './img/skill4.png'
import skill2_1 from './img/skill2_1.png'
import skill2_2 from './img/skill2_2.png'
import skill2_3 from './img/skill2_3.png'
import skill2_4 from './img/skill2_4.png'
import skill3_1 from './img/skill3_1.png'
import skill3_2 from './img/skill3_2.png'
import skill3_3 from './img/skill3_3.png'
import skill3_4 from './img/skill3_4.png'
import desImg1 from './img/des-img1.png'
import desImg2 from './img/des-img2.png'
import desImg3 from './img/des-img3.png'

import './game.css'

const Game = () => {
    return(
        <div className='Game'>
            <div className='block'>
                <div className='Game-menu-list'>
                    <div className='logo-menu'>
                        <div className='logo'>
                            <img style={{height:'20px'}} src={riotgames}/>
                            <hr></hr>
                            <img style={{height:'20px'}}src={logo}/>
                        </div>
                        <ul>
                            <li><a href="">GAME</a></li>
                            <li><a href="">CHAMPIONS</a></li>
                            <li><a href="">NEWS <img src={PolygonW}/></a></li>
                            <li><a href="">PATCH NOTES</a></li>
                            <li><a href="">DISCOVER <img src={PolygonW}/></a></li>
                            <li><a href="">ESPORTS</a></li>
                            <li><a href="">UNIVERSE</a></li>
                            <li><a href="">SHOP</a></li>
                            <li><a href="">SUPPORT</a></li>
                        </ul>
                    </div>
                    <div className='user'>
                        <img className='icon' src={icon}/>
                        <a href="">UNEPICKED</a>
                        <img src={PolygonW}/>
                    </div>
                </div>
//Создать массив
                <div className='Game-background-image'>
                    <div className='Game-pers'>
                        <p className='agents'>AGENTS</p>
                        <div className="card">
                            <div className="card2">
                                <img className='pers' src={Pers1}/>
                                <div className='Agents-personal-details'>
                                    <p className='Agents-name'>PHOENIX</p>
                                    <p className='Agents-country'>United Kingdom</p>
                                </div>
                                <div className='Agents-skill'>
                                    <img className='skill1' src={skill1}/>
                                    <img className='skill2' src={skill2}/>
                                    <img className='skill3' src={skill3}/>
                                    <img className='skill4' src={skill4}/>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card2">
                                <img className='pers' src={Pers2}/>
                                <div className='Agents-personal-details'>
                                    <p className='Agents-name'>JETT</p>
                                    <p className='Agents-country'>South Korea</p>
                                </div>
                                <div className='Agents-skill'>
                                    <img className='skill2' src={skill2_1}/>
                                    <img className='skill2' src={skill2_2}/>
                                    <img className='skill1' src={skill2_3}/>
                                    <img className='skill4' src={skill2_4}/>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card2">
                                <img className='pers' src={Pers3}/>
                                <div className='Agents-personal-details'>
                                    <p className='Agents-name'>SOVA</p>
                                    <p className='Agents-country'>Russia</p>
                                </div>
                                <div className='Agents-skill'>
                                    <img className='skill1' src={skill3_1}/>
                                    <img className='skill1' src={skill3_2}/>
                                    <img className='skill1' src={skill3_3}/>
                                    <img className='skill4' src={skill3_4}/>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card2">
                                <img className='pers' src={Pers4}/>
                                <div className='Agents-personal-details'>
                                    <p className='Agents-name'>SAGE</p>
                                    <p className='Agents-country'>Chine</p>
                                </div>
                                <div className='Agents-skill'>
                                    <img className='skill1' src={skill1}/>
                                    <img className='skill2' src={skill2_1}/>
                                    <img className='skill3' src={skill3_1}/>
                                    <img className='skill4' src={skill4}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Skill-description'>
                    <div className='description'>
                        <div className='description-block'>
                            <div className='description-group'>
                                <p className='descriprion-name'>BASIC</p>
                                <p className='descriprion-property'>Slow Orb</p>
                                <p className='descriprion-use'>Cast out a radianite orb that breaks into a slowing field upon impact with the ground.</p>
                            </div>
                            <span className='description-red-block'><img className="descriprion-img" src={desImg1}/></span>                            
                        </div>
                    </div>
                    <div className='description'>
                        <div className='description-block'>
                            <div className='description-group'>
                                <p className='descriprion-name'>SIGNATURE</p>
                                <p className='descriprion-property'>Healing Orb</p>
                                <p className='descriprion-use'>Heal an ally or yourself to full health over a few seconds.</p>
                            </div>
                            <span className='description-red-block'><img className="descriprion-img" src={desImg2}/></span>
                        </div>
                    </div>
                    <div className='description'>
                        <div className='description-block'>
                            <div className='description-group'>
                                <p className='descriprion-name'>ULTIMATE</p>
                                <p className='descriprion-property'>Resurrection</p>
                                <p className='descriprion-use'>Target a friendly corpse. After a short delay, revive them with full health.</p>
                            </div>
                            <span className='description-red-block'><img className="descriprion-img" src={desImg3}/></span>
                        </div>
                    </div>
                    <div className='next-skill-description'>
                        <img className="polygon" src={PolygonB}/>
                    </div>
                </div>
                <div className='Game-white-line'></div>
            </div>
        </div>
    )
}
export default Game;
