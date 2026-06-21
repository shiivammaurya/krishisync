import { Button, Input, Loader, Toast, Modal } from "../components/ui";
import { useState } from "react";

function ComponentShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        UI Component Library
      </h1>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Loader Component
      </h2>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Toast Component
      </h2>

      <Toast message="Farmer group updated successfully!" />

    <div className="flex gap-6 items-center">
      <Loader size="sm" />
      <Loader size="md" />
      <Loader size="lg" />
    </div>
       <Input
        label="Farmer Name"
        placeholder="Enter farmer name"
       />

      <div className="flex gap-4 flex-wrap">

        <Button variant="primary">
          Primary Button
        </Button>

        <Button variant="secondary">
          Secondary Button
        </Button>

        <Button variant="outline">
          Outline Button
        </Button>

        <Button disabled>
          Disabled Button
        </Button>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
         Modal Component
        </h2>

        <Button onClick={() => setIsModalOpen(true)}>
         Open Modal
        </Button>

      <Modal
         isOpen={isModalOpen}
         onClose={() => setIsModalOpen(false)}
         title="Farmer Details"
      >
        <p>This is a reusable modal component.</p>
      </Modal>

      </div>

    </div>
  );
}

export default ComponentShowcase;