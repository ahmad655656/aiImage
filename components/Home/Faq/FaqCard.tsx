import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FaqCard = () => {
  return (
     <Accordion
      type="single"
      collapsible
      className="w-full text-white"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className='md:text-xl lg:text-2xl'>How does text-to-image generation work?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-base md:text-lg text-balance">
          <p>
            Our AI-powered generator transforms your text descriptions into stunning visual artwork. Simply describe what you want to see, and our advanced algorithms will create a unique image based on your input.
          </p>
          <p>
            The technology uses deep learning models trained on millions of image-text pairs to understand and visualize your concepts.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className='md:text-xl lg:text-2xl'>What kind of prompts work best?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-base md:text-lg text-balance">
          <p>
            Be specific with your descriptions - include details about style, composition, colors, and mood. For example: A futuristic cityscape at sunset with neon lights reflecting on wet streets, digital art style.
          </p>
          <p>
            You can also reference famous art styles or artists to guide the output (e.g.,in the style of Van Gogh).
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className='md:text-xl lg:text-2xl'>Can I use the generated images commercially?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-base md:text-lg text-balance">
          <p>
            Yes! All images created with our service are royalty-free and can be used for both personal and commercial projects without attribution.
          </p>
          <p>
            However, we recommend reviewing our terms of service for any specific restrictions regarding sensitive content or redistribution rights.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className='text-xl lg:text-2xl'>How long does image generation take?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-base md:text-lg text-balance">
          <p>
            Most images generate within 15-30 seconds depending on complexity and server load. Higher resolution outputs may take slightly longer.
          </p>
          <p>
            Youll receive a notification when your image is ready to view and download.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default FaqCard
