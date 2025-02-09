import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox"; // Import Checkbox component
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

export default function HomePage() {
  return (
    <section className="bg-background pt-6 pb-12 w-[80%] mx-auto">
      <h1 className="font-bold text-[5vh] text-center">Test Data</h1>
      <div className="space-y-3">
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
          <Card className="w-[350px] h-[200px]">
            <CardHeader>
              <CardTitle>Voltage</CardTitle>
              <CardDescription>Select one of the options below.</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="option-one">
                <div className="flex  space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">120-277V</Label>
                </div>
                <div className="flex  space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">120-277/480V</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

        {/* CCT Card (unchanged) */}
        <div className="w-full">
          <Card className="w-[350px] h-[200px]">
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
                <Label htmlFor="size-s">S</Label>
                  <Checkbox id="size-s" />
                 
                </div>
                <div className="flex  space-x-1">
                <Label htmlFor="size-m">M</Label>
                  <Checkbox id="size-m" />
                 
                </div>
                <div className="flex  space-x-1">
                <Label htmlFor="size-l">L</Label>
                  <Checkbox id="size-l" />
                 
                </div>
                <div className="flex  space-x-1">
                <Label htmlFor="size-xl">XL</Label>
                  <Checkbox id="size-xl" />
                
                </div>
              </div>
                </div>
                <div className="flex  space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Amber</Label>
                </div>
                <div className="flex  space-x-2">
                  <RadioGroupItem value="option-three" id="option-three" />
                  <Label htmlFor="option-three">RGBW</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

        {/* Size Card (updated to Checkbox) */}
        <div className="w-full">
          <Card className="w-[350px] h-[200px]">
            <CardHeader>
              <CardTitle>Size</CardTitle>
              <CardDescription>Select multiple options below.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex  space-x-2">
                  <Checkbox id="size-s" />
                  <Label htmlFor="size-s">S</Label>
                </div>
                <div className="flex  space-x-2">
                  <Checkbox id="size-m" />
                  <Label htmlFor="size-m">M</Label>
                </div>
                <div className="flex  space-x-2">
                  <Checkbox id="size-l" />
                  <Label htmlFor="size-l">L</Label>
                </div>
                <div className="flex  space-x-2">
                  <Checkbox id="size-xl" />
                  <Label htmlFor="size-xl">XL</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mounting Card (updated to Checkbox) */}
        <div className="w-full">
          <Card className="w-[350px] h-[200px]">
            <CardHeader>
              <CardTitle>Mounting</CardTitle>
              <CardDescription>Select multiple options below.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex  space-x-2">
                  <Checkbox id="mounting-trunnion" />
                  <Label htmlFor="mounting-trunnion">Trunnion</Label>
                </div>
                <div className="flex  space-x-2">
                  <Checkbox id="mounting-slipfitter" />
                  <Label htmlFor="mounting-slipfitter">Slipfitter</Label>
                </div>
                <div className="flex  space-x-2">
                  <Checkbox id="mounting-wall-mount" />
                  <Label htmlFor="mounting-wall-mount">Wall Mount</Label>
                </div>
                <div className="flex  space-x-2">
                  <Checkbox id="mounting-knuckle" />
                  <Label htmlFor="mounting-knuckle">Knuckle</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Distribution Card (updated to Checkbox) */}
        <div className="w-full">
          <Card className="w-[350px] h-[200px]">
            <CardHeader>
              <CardTitle>Distribution</CardTitle>
              <CardDescription>Select multiple options below.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex  space-x-2">
                  <Checkbox id="distribution-type2" />
                  <Label htmlFor="distribution-type2">Type 2</Label>
                </div>
                <div className="flex  space-x-2">
                  <Checkbox id="distribution-type3" />
                  <Label htmlFor="distribution-type3">Type 3</Label>
                </div>
                <div className="flex  space-x-2">
                  <Checkbox id="distribution-type4" />
                  <Label htmlFor="distribution-type4">Type 4</Label>
                </div>
                <div className="flex  space-x-2">
                  <Checkbox id="distribution-type5" />
                  <Label htmlFor="distribution-type5">Type 5</Label>
                </div>
                <div className="flex  space-x-2">
                  <Checkbox id="distribution-b33" />
                  <Label htmlFor="distribution-b33">B33</Label>
                </div>
                <div className="flex  space-x-2">
                  <Checkbox id="distribution-b55" />
                  <Label htmlFor="distribution-b55">B55</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Battery Card (unchanged) */}
        <div className="w-full">
          <Card className="w-[350px] h-[200px]">
            <CardHeader>
              <CardTitle>Emergency Battery</CardTitle>
              <CardDescription>Select one of the options below.</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="option-one">
                <div className="flex  space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">No emergency battery</Label>
                </div>
                <div className="flex  space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Cold start emergency battery</Label>
                </div>
                <div className="flex  space-x-2">
                  <RadioGroupItem value="option-three" id="option-three" />
                  <Label htmlFor="option-three">Normal emergency battery</Label>
                </div>
                <div className="flex  space-x-2">
                  <RadioGroupItem value="option-four" id="option-four" />
                  <Label htmlFor="option-four">Cold/Normal emergency battery</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

      </div>
      <div className="w-full flex justify-center gap-16 ">
        <Button className="bg-transparent hover:text-white dark:text-white border-black text-black ">Clear all</Button>
        <Button className="p-6">Generate</Button>
        <Dialog>
  <DialogTrigger className="bg-transparent hover:border-black dark:text-white border-transparent text-black " >Help</DialogTrigger>
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