import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";

export default function FreshFadeApp() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState("");

  const handleBooking = () => {
    if (selectedService && selectedDate && selectedTime) {
      setStep(3);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 text-center space-y-6">
      <h1 className="text-3xl font-bold text-primary">FreshFade Barber Booking</h1>

      {step === 1 && (
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Select a Service</h2>
            <select
              className="w-full border p-2 rounded"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
            >
              <option value="">-- Choose a service --</option>
              <option value="Short Haircut">Short Haircut</option>
              <option value="Beard Trim">Beard Trim</option>
              <option value="Fade + Beard">Fade + Beard</option>
            </select>
            <Button onClick={() => selectedService && setStep(2)}>
              Continue
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Select Date & Time</h2>
            <Calendar
              selected={selectedDate}
              onSelect={setSelectedDate}
              mode="single"
            />
            <Input
              type="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full"
            />
            <Button onClick={handleBooking}>Book Appointment</Button>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-green-600">
              Appointment Confirmed!
            </h2>
            <p>
              <strong>Service:</strong> {selectedService}
            </p>
            <p>
              <strong>Date:</strong> {selectedDate?.toLocaleDateString()}
            </p>
            <p>
              <strong>Time:</strong> {selectedTime}
            </p>
            <Button onClick={() => setStep(1)}>Book Another</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
