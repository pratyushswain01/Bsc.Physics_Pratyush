import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function VideoSettings() {
  const [notifications, setNotifications] = useState(true);
  const [autoPlay, setAutoPlay] = useState(false);
  const [videoQuality, setVideoQuality] = useState("1080p");
  const [theme, setTheme] = useState("light");
  const [caption, setCaption] = useState(false);
  
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Video Settings</h1>

      <Card className="mb-4 bg-white shadow-md">
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <Label>Notifications</Label>
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          </div>
        </CardContent>
      </Card>

      <Card className="mb-4 bg-white shadow-md">
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <Label>Auto-Play Videos</Label>
            <Switch checked={autoPlay} onCheckedChange={setAutoPlay} />
          </div>
        </CardContent>
      </Card>

      <Card className="mb-4 bg-white shadow-md">
        <CardContent className="p-4">
          <Label className="block mb-2">Video Quality</Label>
          <select
            className="w-full p-2 border rounded"
            value={videoQuality}
            onChange={(e) => setVideoQuality(e.target.value)}
          >
            <option value="720p">720p</option>
            <option value="1080p">1080p</option>
            <option value="4K">4K</option>
          </select>
        </CardContent>
      </Card>

      <Card className="mb-4 bg-white shadow-md">
        <CardContent className="p-4">
          <Label className="block mb-2">Theme</Label>
          <select
            className="w-full p-2 border rounded"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </CardContent>
      </Card>

      <Card className="mb-4 bg-white shadow-md">
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <Label>Enable Captions</Label>
            <Switch checked={caption} onCheckedChange={setCaption} />
          </div>
        </CardContent>
      </Card>

      <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white text-lg py-2 rounded-lg shadow-md">
        Save Changes
      </Button>
    </div>
  );
}
