"use client";

import React, { useState } from "react";
import QrReader from "react-qr-scanner"; // Use `react-qr-scanner` library
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";

export default function FormWithQRCode() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    locality: "",
    district: "",
    state: "",
    country: "",
    plasticQuantity: "",
  });

  const [qrData, setQrData] = useState(null);
  const [scannerEnabled, setScannerEnabled] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleScan = (data) => {
    if (data) {
      try {
        const parsedData = JSON.parse(data.text); // Parse JSON from the scanned QR code
        setQrData(parsedData);
        setFormData({
          ...parsedData,
          plasticQuantity: "", // Allow user to enter this manually
        });
        setScannerEnabled(false); // Disable scanner after successful scan
      } catch (error) {
        console.error("Invalid QR Code data:", error);
        alert("The QR code does not contain valid JSON data.");
      }
    }
  };

  const handleError = (err) => {
    console.error("Error scanning QR Code:", err);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Data Submitted!");
    setFormData({
      name: "",
      email: "",
      locality: "",
      district: "",
      state: "",
      country: "",
      plasticQuantity: "",
    });
    setQrData(null);
  };

  return (
    <div className="mt-36 px-16">
      <a href="/municipal" className="underline">
        Back
      </a>
      <div className="flex flex-col sm:flex-row items-center mt-4 gap-6">
        {/* Form Section */}
        <div className="w-full sm:w-1/2 p-6 rounded-lg border border-neutral-200">
          <h2 className="text-xl font-semibold mb-4">Enter Household Data</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Locality</label>
              <Input
                type="text"
                name="locality"
                value={formData.locality}
                onChange={handleInputChange}
                placeholder="Enter locality"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">District</label>
              <Input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleInputChange}
                placeholder="Enter district"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">State</label>
              <Input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder="Enter state"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Country</label>
              <Input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="Enter country"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Plastic Quantity (kg)
              </label>
              <Input
                type="number"
                name="plasticQuantity"
                value={formData.plasticQuantity}
                onChange={handleInputChange}
                placeholder="Enter quantity"
                required
              />
            </div>
            <Button type="submit">Submit Data</Button>
          </form>
        </div>

        {/* QR Code Scanner Section */}
        <div className="w-full sm:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Scan QR Code</h2>
          {scannerEnabled ? (
            <div className="relative">
              <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: "100%" }}
              />
              <Button
                className="bg-red-600 mt-4"
                onClick={() => setScannerEnabled(false)}
              >
                Close Scanner
              </Button>
            </div>
          ) : (
            <Button onClick={() => setScannerEnabled(true)}>
              Start QR Code Scanner
            </Button>
          )}
          {qrData && (
            <div className="mt-4 p-2 border rounded bg-white">
              <h3 className="font-semibold">Scanned Data:</h3>
              <pre className="text-sm">{JSON.stringify(qrData, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
