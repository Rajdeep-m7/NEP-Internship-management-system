import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import {  CheckIcon, DownloadIcon, X } from 'lucide-react';
import { updateApplicantStatus } from '../../supabase/api';

const ApplicantCard = ({...props}) => {
  return (
    <div>
      {props.status === "applied" && (
        <Card className='flex'>
          <CardHeader className=' flex items-center justify-between'>
              <div className='flex flex-col sm:flex-row gap-4 sm:gap-8'>
                  {/* <div className=' flex sm:flex-col items-center gap-2'>
                      <img 
                      className='rounded-[50%] h-12 sm:h-20 md:h-25 lg:h-30'
                      src={props.photo} 
                      alt="" />
                      <Badge 
                          variant = "secondary"
                          className={cn(
                          'text-white text-[10px] sm:text-xs rounded-2xl',
                          props.status === "Shortlisted" && "bg-green-600",
                          props.status === "Applied" && "bg-blue-600",
                          props.status === "Screening" && "bg-orange-400",
                          props.status === "Rejected" && "bg-red-500",
                          props.status === "Interview Scheduled" && "bg-purple-500",
                          props.status === "Interview Completed" && "bg-purple-700",
                          props.status === "Offer Extended" && "bg-green-700",
                          props.status === "Interview Completed" && "bg-purple-700",
                      )}>{props.status}</Badge>
                  </div> */}

                  <div className='flex-1'>
                      <h2 className='text-xl font-semibold'>{props.name}</h2>
                      <p className='text-[10px] sm:text-xs '>Id: {props.id}</p>
                      <div className='flex lg:gap-5 lg:items-center justify-between'>
                          <h3 className='text-xs sm:text-sm'>💼{props.roleApplied}</h3>
                          {/* <h3 className='text-xs sm:text-sm'>{props.appliedDate}</h3> */}
                      </div>
                      <div className='flex lg:gap-5 lg:items-center justify-between'>
                          <h3 className='text-xs sm:text-sm'><span className='font-semibold'>Dept: </span>{props.department}</h3>
                          <h3 className='text-xs sm:text-sm'><span className='font-semibold'>Email: </span>{props.email}</h3>
                      </div>
                  </div>
              </div>
          </CardHeader>
          <CardFooter className='flex justify-center'>
              <div className='flex gap-5'>
                  <Button
                  onClick ={async ()=> {
                    const response = await updateApplicantStatus(props.id,"accepted")
                    if(response.success){
                      props.handleStatus("accepted")
                    }else{
                      console.error(response.error)
                    }
                  }}
                  className='bg-green-500 text-xs sm:text-sm sm:px-10 hover:bg-green-600 cursor-pointer'><CheckIcon/> Approve</Button>
                  <Button 
                  onClick ={async ()=> {
                    const response = await updateApplicantStatus(props.id,"rejected")
                    if(response.success){
                      props.handleStatus("rejected")
                    }else{
                      console.error(response.error)
                    }
                  }}
                  className='bg-red-500 text-xs sm:text-sm sm:px-10 hover:bg-red-600 cursor-pointer'><X/> Reject</Button>
                  
                  <Button className='bg-blue-500 text-xs sm:text-sm sm:px-10 hover:bg-blue-600 cursor-pointer'><DownloadIcon/> Download CV</Button>
              </div>
          </CardFooter>
        </Card>
      )}
      
    </div>
  )
}

export default ApplicantCard
