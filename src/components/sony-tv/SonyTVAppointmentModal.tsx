
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SonyTVAppointmentForm from './SonyTVAppointmentForm';

interface SonyTVAppointmentModalProps {
  trigger: React.ReactNode;
  className?: string;
}

const SonyTVAppointmentModal = ({ trigger, className }: SonyTVAppointmentModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-y-auto max-h-[90vh]">
        <SonyTVAppointmentForm inModal={true} />
      </DialogContent>
    </Dialog>
  );
};

export default SonyTVAppointmentModal;
