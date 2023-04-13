"use client";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

function myProject() {
  return (
    <div className='flex flex-col justify-center items-center py-10 pb-24'>
        <h2 className='text-4xl font-extrabold my-5 mb-20'>My Projects</h2>

        <div className='grid grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-36 place-items-center '>
            <Card sx={{width: 250, height: 350}} className='Card flex flex-col justify-around items-center shadow-lg rounded-xl hover:shadow-xl hover:shadow-slate-400 bg-slate-200'>
                <CardMedia sx={{height: 140, width: 225}} component='img' image='/wsApp-clone.png'/>
                <Typography className='font-semibold text-lg'>WhatsApp Clone</Typography>
                <CardActions>
                    <Button className='bg-slate-600 text-slate-50 font-bold px-5 py-3 hover:bg-slate-500 rounded-lg'>
                        <a href="https://whatsapp-clone-2cbc0.web.app/" target='blank'>View Project</a>
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{width: 250, height: 350}} className='Card hidden lg:flex flex-col justify-around items-center shadow-lg rounded-xl hover:shadow-xl hover:shadow-slate-400 bg-slate-200'>
                <CardMedia sx={{height: 140, width: 225}} component='img' image='/ggle-clone.png'/>
                <Typography className='font-semibold text-lg'>Google Clone</Typography>
                <CardActions>
                    <Button className='bg-slate-600 text-slate-50 font-bold px-5 py-3 hover:bg-slate-500 rounded-lg'>
                        <a href="https://clone-gle.netlify.app/" target='blank'>View Project</a>
                    </Button>
                </CardActions>
            </Card>

            <Card sx={{width: 200, height: 200}} className='Card Card-more flex flex-col justify-around items-center shadow-2xl rounded-full  hover:cursor-pointer hover:shadow-xl'>
                <CardActions>
                    <Button className='button text-slate-600
                    hover:bg-transparent font-bold px-5 py-3 rounded-lg text-lg '>
                        <Link href="/projects" >
                            <div className="button-content">
                                <span className="button-text">More <br /> Projects</span>

                                <div className="button-shape-1"></div>
                                <div className="button-shape-2"></div>
                                <div className="button-shape-3"></div>
                                <div className="button-shape-4"></div>
                            </div>

                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </div>
    </div>
  )
}

export default myProject;