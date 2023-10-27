"use client";

import { useStoreModal } from '@/hooks/use-store-modal';
import { UserButton } from '@clerk/nextjs'
import { useEffect } from 'react';

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return (
    <>
      <p>Hello admin dashboard</p>
      <UserButton afterSignOutUrl='/' />

    </>
  )
}

export default SetupPage;
