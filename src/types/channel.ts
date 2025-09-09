export interface Channel {
  name: string;
  url: string;
  category: string;
  icon: string;
  description?: string;
}

export interface ChannelCategory {
  id: string;
  name: string;
  channels: Channel[];
}