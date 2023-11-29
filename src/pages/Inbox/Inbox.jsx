import './Inbox.css'
import imgSRC from './../../images/inbox2img2.jpg'
import attach from './../../images/attachsquare.svg'
import select from './../../images/Rectangle 126.png'
import filter from './../../images/frame.svg'
import download from './../../images/inbox2 arrowcircledown2.svg'
import option from './../../images/ic_baseline-more-vert.svg'
import trash from './../../images/trash.svg'
import gallery from './../../images/gallery.svg'

const InboxComponnent = () => {
    return (
        <div className='HJ_container rh-inbox'>
            <div className="border-b">
                <div className="toolbar">
                    <div>
                        <span>
                            <img src={select} />
                        </span>
                        <span>
                            <img src={filter} />
                        </span>
                    </div>
                    <span className='f-right'><img src={trash} /></span>
                </div>


            </div>

            <div className="d-flex">
                <div className='Myscroll'>
                    <div className="list">


                        <div className="rh-item justify-content-between active d-flex">
                            <span>icon</span>
                            <div>
                                <div className='d-flex'>
                                    <div className='seen'></div>
                                    <span>ola abdalrahman </span>
                                    <div className='ml-auto'>5/5/2023</div>
                                </div>
                                <p className='text-bold'>photo for project</p>
                                <div className="d-flex">
                                    <p>Hello , Here're some kfk</p>
                                    <span className='ml-auto'>
                                        icn
                                    </span>
                                </div>

                            </div>
                        </div>


                        <div className="rh-item justify-content-between d-flex">
                            <span><img src={select} /></span>
                            <div>
                                <div className='d-flex'>
                                    <div className='seen'></div>
                                    <span>ola abdalrahman </span>
                                    <div className='ml-auto'>5/5/2023</div>
                                </div>
                                <p className='text-bold'>photo for project</p>
                                <div className="d-flex">
                                    <p>Hello , Here're some kfk</p>
                                    <span className='ml-auto'>
                                        <img src={attach} />
                                    </span>
                                </div>

                            </div>
                        </div>


                        <div className="rh-item justify-content-between d-flex">
                            <span><img src={select} /></span>
                            <div>
                                <div className='d-flex'>
                                    <div className='seen'></div>
                                    <span>ola abdalrahman </span>
                                    <div className='ml-auto'>5/5/2023</div>
                                </div>
                                <p className='text-bold'>photo for project</p>
                                <div className="d-flex">
                                    <p>Hello , Here're some kfk</p>
                                    <span className='ml-auto'>
                                        <img src={attach} />
                                    </span>
                                </div>

                            </div>
                        </div>


                        <div className="rh-item justify-content-between d-flex">
                            <span><img src={select} /></span>
                            <div>
                                <div className='d-flex'>
                                    <div className='seen'></div>
                                    <span>ola abdalrahman </span>
                                    <div className='ml-auto'>5/5/2023</div>
                                </div>
                                <p className='text-bold'>photo for project</p>
                                <div className="d-flex">
                                    <p>Hello , Here're some kfk</p>
                                    <span className='ml-auto'>
                                        <img src={attach} />
                                    </span>
                                </div>

                            </div>
                        </div>


                        <div className="rh-item justify-content-between d-flex">
                            <span><img src={select} /></span>
                            <div>
                                <div className='d-flex'>
                                    <div className='seen'></div>
                                    <span>ola abdalrahman </span>
                                    <div className='ml-auto'>5/5/2023</div>
                                </div>
                                <p className='text-bold'>photo for project</p>
                                <div className="d-flex">
                                    <p>Hello , Here're some kfk</p>
                                    <span className='ml-auto'>
                                        <img src={attach} />
                                    </span>
                                </div>

                            </div>
                        </div>


                        <div className="rh-item justify-content-between d-flex">
                            <span><img src={select} /></span>
                            <div>
                                <div className='d-flex'>
                                    <div className='seen'></div>
                                    <span>ola abdalrahman </span>
                                    <div className='ml-auto'>5/5/2023</div>
                                </div>
                                <p className='text-bold'>photo for project</p>
                                <div className="d-flex">
                                    <p>Hello , Here're some kfk</p>
                                    <span className='ml-auto'>
                                        <img src={attach} />
                                    </span>
                                </div>

                            </div>
                        </div>

                        <div className="rh-item justify-content-between d-flex">
                            <span> <img src={attach} /></span>
                            <div>
                                <div className='d-flex'>
                                    <div className='seen'></div>
                                    <span>ola abdalrahman </span>
                                    <div className='ml-auto'>5/5/2023</div>
                                </div>
                                <p className='text-bold'>photo for project</p>
                                <div className="d-flex">
                                    <p>Hello , Here're some kfk</p>
                                    <span className='ml-auto'>
                                        icn
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='content'>
                        <div className='d-flex'>
                            <div className='lineheight'>
                                <p className='text-bold'>OLA Abd alrahman</p>
                                <p >olaabd@gmail.com</p>
                            </div>
                            <div className='ml-auto'>
                                <span>5 july 2023 </span>
                                <span> icon</span>
                                <span> <img src={option} /></span>
                            </div>
                        </div>
                        <div>
                            <p className='text-bold mt-4'>photo fot the project</p>
                            <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eaque fuga itaque sint quidem aliquid omnis iure in! Laudantium nihil, nulla perferendis placeat libero nesciunt quos optio porro labore quas?</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <span className='text-bold'><img src={attach} /> Attachments 6</span>
                            <span>Download all <img src={download} /></span>
                        </div>
                        <img src={imgSRC} alt="link" className='mr-2' />
                        <img src={imgSRC} alt="link" className='mr-2' />
                        <img src={imgSRC} alt="link" className='mr-2' />
                        <img src={imgSRC} alt="link" className='mr-2' />

                    </div>


                    <h3 className='beforeAndAfter text-bold'>Reply</h3>
                    <div className='content'>
                        <div className=' d-flex'>
                            <p className='d-inline'>Start writing your <span className="color-blue"> response</span> or <span className='color-blue'>forward</span> message...</p> <span className='ml-auto'><img src={option} /></span>
                        </div>
                        <div className='d-flex mt-3'>
                            <span><img src={attach} /></span> <span> <img src={gallery} /></span> <button className='btn btn-primary ml-auto'>Send</button>
                        </div>
                    </div>

                </div>


            </div>


        </div>
    )
}

export default InboxComponnent
