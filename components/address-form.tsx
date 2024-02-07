"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import StepsWaraper from "@/components/ui/StepsWaraper";
type UserData = {
  username: string;
  email: string;
  phone: string;
};

type FormProbs = UserData & {
  updatefields: (fields: Partial<UserData>) => void;
};

export function AddressForm({
  username,
  email,
  phone,
  updatefields,
}: FormProbs) {
  return (
    <StepsWaraper
      title="Personal info"
      subtitle="Pleaze provide your name,email,and phone number"
    >
      <div className=" flex-1">
        <div>
          <div className="space-y-2">
            <Label htmlFor="username">Name</Label>
            <Input
              value={username}
              onChange={(e) => updatefields({ username: e.target.value })}
              name="username"
              placeholder="Enter your name"
              className=" focus:border-blue-500 "
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              value={email}
              onChange={(e) => updatefields({ email: e.target.value })}
              name="email"
              placeholder="Enter your email"
              type="email"
              className=" focus:border-blue-500 "
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              value={phone}
              onChange={(e) => updatefields({ phone: e.target.value })}
              name="phone"
              placeholder="Format: 123-456-7890"
              className=" focus:border-blue-500 "
            />
          </div>
        </div>
      </div>
    </StepsWaraper>
  );
}
