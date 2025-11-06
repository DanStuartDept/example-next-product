import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle,
  Button,
  Input,
  Label,
  Badge,
  Skeleton,
  Separator,
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui"

export default function ComponentsDemo() {
  return (
    <div className="min-h-screen p-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Component Library</h1>
          <p className="text-muted-foreground">
            A showcase of our shadcn/ui component collection
          </p>
        </div>

        <Separator />

        {/* Alert Example */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Alerts</h2>
          <Alert>
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              This is a default alert component for displaying information.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              This is a destructive alert for error messages.
            </AlertDescription>
          </Alert>
        </section>

        <Separator />

        {/* Cards Example */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Card Component</CardTitle>
                <CardDescription>
                  A versatile card for displaying content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Cards are great for organizing related information in a clean,
                  contained format.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Learn More</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>With Badge</CardTitle>
                <CardDescription>Cards can include badges</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Loading State</CardTitle>
                <CardDescription>Using skeleton loaders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Form Components */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Form Components</h2>
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>
                Example form using our form components
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Submit</Button>
            </CardFooter>
          </Card>
        </section>

        <Separator />

        {/* Buttons */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Buttons</h2>
          <div className="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>
      </div>
    </div>
  )
}
