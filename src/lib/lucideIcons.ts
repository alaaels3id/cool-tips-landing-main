/**
 * lucideIcons.ts
 * Central map from Lucide icon name (string) → React component.
 * Keeps icon resolution in one place so every page/component
 * that receives `iconName` from the API can render it correctly.
 *
 * Usage:
 *   import { getLucideIcon } from "@/lib/lucideIcons";
 *   const Icon = getLucideIcon(category.iconName);
 *   <Icon className="w-5 h-5 text-primary" />
 */

import {
  Layers, Code, Database, Server, Cpu, Terminal, Globe, Zap,
  BookOpen, Package, Box, Flame, Rocket, Shield, Lock, Key,
  Settings, Star, Heart, Award, BarChart2, PieChart, TrendingUp,
  Activity, Monitor, Smartphone, Wifi, Cloud, Download, Upload,
  Link, Search, Bell, Mail, MessageSquare, User, Users, Briefcase,
  Home, Map, Wrench, Lightbulb, Bookmark, Tag, Filter, List, Grid,
  Play, Video, Image, File, Folder, Share, ExternalLink, RefreshCw,
  Plus, Minus, Check, X, ChevronRight, ArrowRight, Clock, Calendar,
  Eye, Brain, Sparkles, Layout, Palette,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Layers, Code, Database, Server, Cpu, Terminal, Globe, Zap,
  BookOpen, Package, Box, Flame, Rocket, Shield, Lock, Key,
  Settings, Star, Heart, Award,
  BarChart: BarChart2,
  PieChart, TrendingUp, Activity, Monitor, Smartphone, Wifi, Cloud,
  Download, Upload, Link, Search, Bell, Mail, MessageSquare,
  User, Users, Briefcase, Home, Map, Wrench, Tool: Wrench,
  Lightbulb, Bookmark, Tag, Filter, List, Grid, Play, Video,
  Image, File, Folder, Share, ExternalLink, RefreshCw, Plus,
  Minus, Check, X, ChevronRight, ArrowRight, Clock, Calendar,
  Eye, Brain, Sparkles, Layout, Palette,
};

/**
 * Resolve a Lucide icon component by its stored name string.
 * Falls back to Zap if name is unknown or missing.
 */
export function getLucideIcon(name?: string | null): LucideIcon {
  if (!name) return Zap;
  return ICON_MAP[name] ?? Zap;
}

export const AVAILABLE_ICONS = Object.keys(ICON_MAP);
