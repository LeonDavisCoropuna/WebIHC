import SubHead from '../../Atoms/subhead'
import { Link } from 'react-router-dom'
import Gallery from "react-image-gallery"
export default function StoryBoard() {
    const images = [
        {
            original: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184168/ihc/storyboard/1.jpg",
            thumbnail: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184168/ihc/storyboard/1.jpg",
            description: "Imagen 1"
        },
        {
            original: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184168/ihc/storyboard/2.jpg",
            thumbnail: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184168/ihc/storyboard/2.jpg",
            description: "Imagen 2"
        },
        {
            original: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184169/ihc/storyboard/3.jpg",
            thumbnail: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184169/ihc/storyboard/3.jpg",
            description: "Imagen 3"
        },
        {
            original: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184169/ihc/storyboard/4.jpg",
            thumbnail: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184169/ihc/storyboard/4.jpg",
            description: "Imagen 4"
        },
        {
            original: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184169/ihc/storyboard/5.jpg",
            thumbnail: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184169/ihc/storyboard/5.jpg",
            description: "Imagen 5"
        },
        {
            original: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184169/ihc/storyboard/6.jpg",
            thumbnail: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184169/ihc/storyboard/6.jpg",
            description: "Imagen 6"
        },
        {
            original: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184169/ihc/storyboard/7.jpg",
            thumbnail: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184169/ihc/storyboard/7.jpg",
            description: "Imagen 7"
        },
        {
            original: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184169/ihc/storyboard/8.jpg",
            thumbnail: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184169/ihc/storyboard/8.jpg",
            description: "Imagen 8"
        }
    ]
    return (
        <div className="min-h-screen bg-primary-300 items-center justify-center flex flex-col">
            <SubHead style="text-center py-4" color="text-white">
                Etapa 3 - Story Board
            </SubHead>
            <Gallery
                items={images}
                showNav={true}
                showPlayButton={false}
                showThumbnails={true}
                thumbnailPosition="bottom"
                slideDuration={800}
                slideInterval={2000}
                lazyLoad={true}
                renderItem={(item) => (
                    <div className="w-full h-full">
                        <img
                            src={item.original}
                            alt={item.description}
                            className="w-[1000px] h-[550px] mx-auto"
                            style={{
                                display: "block",
                            }}
                        />
                    </div>
                )}
            />

            <SubHead style="text-center py-4" color="text-white">
                Momentos Storyboard - Necesidades
            </SubHead>
            <div className="mt-4 flex justify-center">
                <iframe
                    className="rounded-lg w-full max-w-3xl aspect-video"
                    src="https://www.youtube.com/embed/nEB_pCoSytA"
                    title="Momentos Storyboard - Necesidades"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    height="520px"
                    width="800px"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="mt-6 flex justify-center py-4 ">
                <Link
                    to="https://www.youtube.com/@paulantonyparizacamozo1467"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:bg-primary-300 hover:text-white underline text-lg font-medium p-4 bg-white rounded-md border-white border-[1px]"
                >
                    Visita el canal para ver más videos
                </Link>
            </div>
            
        </div>
    )
}
