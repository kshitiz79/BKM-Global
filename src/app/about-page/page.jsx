"use client";

import Services from '@/components/About/AboutMain'
import Banner from '@/components/About/Banner'
import { SpotlightPreview } from '@/components/About/SpotilightPreview'
import { TimelineDemo } from '@/components/About/TimeLineDemo'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner/>
      <SpotlightPreview/>
      <Services/>
      <TimelineDemo/>
    </div>
  )
}

export default page