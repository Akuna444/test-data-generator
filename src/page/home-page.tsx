import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { LucideMessageCircleQuestion, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export default function HomePage() {
  // State for each card's selected items
  const [sizeSelections, setSizeSelections] = useState([]);
  const [mountingSelections, setMountingSelections] = useState([]);
  const [distributionSelections, setDistributionSelections] = useState([]);

  // Toggle selection for Size card
  const toggleSizeSelection = (size) => {
    setSizeSelections((prev) =>
      prev.includes(size) ? prev.filter((item) => item !== size) : [...prev, size]
    );
  };

  // Toggle selection for Mounting card
  const toggleMountingSelection = (mounting) => {
    setMountingSelections((prev) =>
      prev.includes(mounting) ? prev.filter((item) => item !== mounting) : [...prev, mounting]
    );
  };

  // Toggle selection for Distribution card
  const toggleDistributionSelection = (distribution) => {
    setDistributionSelections((prev) =>
      prev.includes(distribution) ? prev.filter((item) => item !== distribution) : [...prev, distribution]
    );
  };

  return (
    <section className="bg-background pt-6 pb-12 w-[80%] mx-auto">
      <h1 className="font-bold text-[5vh] text-center">Test Data</h1>
      <div className="md:space-x-3 md:flex">
        <div>
          <Select>
            <h2 className="font-bold">Products</h2>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a product" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Products</SelectLabel>
                <SelectItem value="fixture">Fixture</SelectItem>
                <SelectItem value="control">Control</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Select>
            <h2 className="font-bold">Sub-Products</h2>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a sub-product" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sub-Products</SelectLabel>
                <SelectItem value="outdoor">Outdoor</SelectItem>
                <SelectItem value="indoor">Indoor</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid py-6 gap-6 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
        {/* Voltage Card (unchanged) */}
        <div className="w-full">
          <Card className="w-[350px] h-[280px]">
            <CardHeader>
              <CardTitle>Voltage</CardTitle>
              <CardDescription>Select one of the options below.</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="option-one">
                <div className="flex space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">120-277V</Label>
                </div>
                <div className="flex space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">120-277/480V</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

        {/* CCT Card (unchanged) */}
        <div className="w-full">
          <Card className="w-[350px] h-[280px]">
            <CardHeader>
              <CardTitle>CCT</CardTitle>
              <CardDescription>Select one of the options below.</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="option-one">
                <div className="block items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Adjustable</Label>
                  <div className="gap-3 ml-3  items-start  flex">
                <div className="flex   space-x-1">
                <Checkbox id="size-s" />
                <Label htmlFor="size-s">3000K</Label>
                 
                 
                </div>
                <div className="flex  space-x-1">
                <Checkbox id="size-m" />
                <Label htmlFor="size-m">4000K</Label>
                  
                 
                </div>
                <div className="flex  space-x-1">
                <Checkbox id="size-l" />
                <Label htmlFor="size-l">5000K</Label>
                  
                 
                </div>
                
                </div>
                </div>
                <div className="flex space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Amber</Label>
                </div>
                <div className="flex space-x-2">
                  <RadioGroupItem value="option-three" id="option-three" />
                  <Label htmlFor="option-three">RGBW</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

        {/* Size Card */}
        <div className="w-full">
          <Card className="w-[350px] h-[280px]">
            <CardHeader>
              <CardTitle>Distribution</CardTitle>
              <CardDescription>Select multiple options below.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
              <div className="mt-4 flex flex-wrap p-3 bg-white dark:bg-slate-900 gap-3 w-full rounded-xl">
               
                {sizeSelections.length > 0 ? (
                  <>
                    {sizeSelections.map((distribution) => (
                      <div>{distribution}</div>
                    ))}
                  </>
                ) : (
                  <p>No item selected</p>
                )}
               
              </div>
              <div className="flex gap-3 flex-wrap">
                {["S", "M", "L", "XL"].map((distribution) => (
                  <div
                    key={distribution}
                    className={`flex space-x-2 px-2 py-1 border-primary rounded-xl border-2 bg-opacity-70 cursor-pointer ${
                      sizeSelections.includes(distribution) ? "bg-primary text-white " : ""
                    }`}
                    onClick={() => toggleSizeSelection(distribution)}
                  >
                   
                      {distribution}
                    
                  </div>
                ))}
              </div>
              </div>
            
            </CardContent>
          </Card>
        </div>

        {/* Mounting Card */}
        <div className="w-full">
          <Card className="w-[350px] h-[280px]">
            <CardHeader>
              <CardTitle>Distribution</CardTitle>
              <CardDescription>Select multiple options below.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
              <div className="mt-4 flex flex-wrap p-3 bg-white dark:bg-slate-900 gap-3 w-full rounded-xl">
               
                {mountingSelections.length > 0 ? (
                  <>
                    {mountingSelections.map((distribution) => (
                      <div>{distribution}</div>
                    ))}
                  </>
                ) : (
                  <p>No item selected</p>
                )}
               
              </div>
              <div className="flex gap-3 flex-wrap">
                {["Trunnion", "Slipfitter", "Wall Mount", "Knuckle"].map((distribution) => (
                  <div
                    key={distribution}
                    className={`flex space-x-2 px-2 py-1 border-primary rounded-xl border-2 bg-opacity-70 cursor-pointer ${
                      mountingSelections.includes(distribution) ? "bg-primary text-white " : ""
                    }`}
                    onClick={() => toggleMountingSelection(distribution)}
                  >
                   
                      {distribution}
                    
                  </div>
                ))}
              </div>
              </div>
            
            </CardContent>
          </Card>
        </div>

        {/* Distribution Card */}
        <div className="w-full">
          <Card className="w-[350px] h-[280px]">
            <CardHeader>
              <CardTitle>Distribution</CardTitle>
              <CardDescription>Select multiple options below.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
              <div className="mt-4 flex flex-wrap p-3 bg-white dark:bg-slate-900 gap-3 w-full rounded-xl">
               
                {distributionSelections.length > 0 ? (
                  <>
                    {distributionSelections.map((distribution) => (
                      <div>{distribution}</div>
                    ))}
                  </>
                ) : (
                  <p>No item selected</p>
                )}
               
              </div>
              <div className="flex gap-3 flex-wrap">
                {["Type 2", "Type 3", "Type 4", "Type 5", "B33", "B55"].map((distribution) => (
                  <div
                    key={distribution}
                    className={`flex space-x-2 px-2 py-1 border-primary rounded-xl border-2 bg-opacity-70 cursor-pointer ${
                      distributionSelections.includes(distribution) ? "bg-primary text-white " : ""
                    }`}
                    onClick={() => toggleDistributionSelection(distribution)}
                  >
                   
                      {distribution}
                    
                  </div>
                ))}
              </div>
              </div>
            
            </CardContent>
          </Card>
        </div>

        {/* Emergency Battery Card (unchanged) */}
        <div className="w-full">
          <Card className="w-[350px] h-[280px]">
            <CardHeader>
              <CardTitle>Emergency Battery</CardTitle>
              <CardDescription>Select one of the options below.</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="option-one">
                <div className="flex space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">No emergency battery</Label>
                </div>
                <div className="flex space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Cold start emergency battery</Label>
                </div>
                <div className="flex space-x-2">
                  <RadioGroupItem value="option-three" id="option-three" />
                  <Label htmlFor="option-three">Normal emergency battery</Label>
                </div>
                <div className="flex space-x-2">
                  <RadioGroupItem value="option-four" id="option-four" />
                  <Label htmlFor="option-four">Cold/Normal emergency battery</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="w-full flex justify-center gap-5 md:gap-16">
      <Button
  onClick={() => {
    setDistributionSelections([]);
    setSizeSelections([]);
    setMountingSelections([]);
  }}
  className="bg-transparent mt-2 hover:text-white dark:text-white border-black text-black">
          Clear all <X/>
        </Button>
        <Button className="p-6">Generate</Button>
        <Dialog>
          <DialogTrigger >
          <Button className="bg-transparent -mt-6 hover:text-white dark:text-white border-black text-black">
          Help <LucideMessageCircleQuestion size={22} />
        </Button>
           
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Helps</DialogTitle>
              <DialogDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, corrupti. Quis tempore quidem ab vero nesciunt, laudantium quos dolorum illo iusto magnam. Cupiditate sint non illum, sapiente, debitis vero laudantium, optio blanditiis molestiae vitae quaerat consequuntur in distinctio eligendi doloremque sunt. Impedit quos est doloremque. Quos velit magni nulla fugiat.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}