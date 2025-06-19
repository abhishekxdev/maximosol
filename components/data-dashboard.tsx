'use client'
import React, { memo } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Target, 
  Clock, 
  CheckCircle, 
  BarChart3,
  Activity,
  Database,
  Globe
} from 'lucide-react'

// Memoized components for better performance
const MetricCard = memo(({ metric, index }: { metric: any, index: number }) => (
  <Card className="border-0 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
    <CardContent className="p-2 sm:p-3 md:p-4">
      <div className="flex items-center justify-between">
        <div className="min-w-0 flex-1">
          <p className="text-xs text-slate-600 dark:text-slate-400 truncate">{metric.title}</p>
          <p className="text-sm sm:text-base md:text-lg font-bold text-slate-900 dark:text-white">{metric.value}</p>
          <div className="flex items-center mt-1">
            {metric.trend === 'up' ? (
              <TrendingUp className="w-3 h-3 text-green-600 mr-1 flex-shrink-0" />
            ) : (
              <TrendingDown className="w-3 h-3 text-green-600 mr-1 flex-shrink-0" />
            )}
            <span className="text-xs text-green-600">{metric.change}</span>
          </div>
        </div>
        <metric.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${metric.color} flex-shrink-0`} />
      </div>
    </CardContent>
  </Card>
))

const ProjectProgress = memo(({ project, index }: { project: any, index: number }) => {
  // Ensure progress is a valid number between 0 and 100
  const progressValue = Math.min(Math.max(Number(project.progress) || 0, 0), 100);
  
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <div className={`w-2 h-2 rounded-full ${project.color} flex-shrink-0`} />
          <span className="font-medium text-slate-900 dark:text-white text-xs sm:text-sm truncate">{project.name}</span>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <Badge variant="secondary" className="text-xs px-1 hidden sm:inline-flex">
            {project.status}
          </Badge>
          <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
            {progressValue}%
          </span>
        </div>
      </div>
      <Progress value={progressValue} max={100} className="h-1.5" />
    </div>
  )
})

const ActivityItem = memo(({ activity, index }: { activity: any, index: number }) => (
  <div className="flex items-start gap-2">
    <activity.icon className={`w-3 h-3 ${activity.color} flex-shrink-0 mt-0.5`} />
    <div className="flex-1 min-w-0">
      <p className="text-xs font-medium text-slate-900 dark:text-white truncate">
        {activity.action}
      </p>
      <p className="text-xs text-slate-600 dark:text-slate-400 truncate">{activity.project}</p>
      <p className="text-xs text-slate-500 dark:text-slate-500">{activity.time}</p>
    </div>
  </div>
))

export function DataDashboard() {
  const metrics = [
    {
      title: "Projects",
      value: "47",
      change: "+12%",
      trend: "up",
      icon: BarChart3,
      color: "text-blue-600"
    },
    {
      title: "Data Points",
      value: "2.4M",
      change: "+8.2%",
      trend: "up",
      icon: Target,
      color: "text-green-600"
    },
    {
      title: "Accuracy",
      value: "99.9%",
      change: "+0.1%",
      trend: "up",
      icon: CheckCircle,
      color: "text-emerald-600"
    },
    {
      title: "Turnaround",
      value: "18hrs",
      change: "-15%",
      trend: "down",
      icon: Clock,
      color: "text-purple-600"
    }
  ]

  const projectData = [
    { name: "Healthcare AI", progress: 85, status: "On Track", color: "bg-blue-500" },
    { name: "Auto Vehicles", progress: 92, status: "Ahead", color: "bg-green-500" },
    { name: "Financial Analytics", progress: 67, status: "Progress", color: "bg-yellow-500" },
    { name: "Retail Intelligence", progress: 78, status: "On Track", color: "bg-purple-500" },
    { name: "Security Systems", progress: 94, status: "Complete", color: "bg-emerald-500" }
  ]

  const recentActivity = [
    { action: "Image annotation completed", project: "MedAI Dataset", time: "2 min ago", icon: CheckCircle, color: "text-green-600" },
    { action: "Quality review passed", project: "AutoDrive V3", time: "5 min ago", icon: Target, color: "text-blue-600" },
    { action: "New project started", project: "FinTech Analytics", time: "12 min ago", icon: Activity, color: "text-purple-600" },
    { action: "Milestone achieved", project: "Retail Vision", time: "18 min ago", icon: TrendingUp, color: "text-emerald-600" }
  ]

  const globalStats = [
    { region: "North America", projects: 18, color: "bg-blue-500" },
    { region: "Europe", projects: 14, color: "bg-green-500" },
    { region: "Asia Pacific", projects: 12, color: "bg-purple-500" },
    { region: "Others", projects: 3, color: "bg-gray-400" }
  ]

  return (
    <div className="w-full bg-white/30 dark:bg-slate-800/30 backdrop-blur-lg p-2 sm:p-3 md:p-4 lg:p-6 rounded-xl sm:rounded-2xl border">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
        <div>
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 dark:text-white">Annotation Dashboard</h2>
          <p className="text-xs text-slate-600 dark:text-slate-400">Real-time project monitoring</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} metric={metric} index={index} />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        {/* Active Projects */}
        <Card className="lg:col-span-2 border-0 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Database className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span className="truncate">Active Projects</span>
            </CardTitle>
            <CardDescription className="text-xs">Current annotation projects</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 sm:space-y-3">
            {projectData.map((project, index) => (
              <ProjectProgress key={index} project={project} index={index} />
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity & Global Distribution */}
        <div className="space-y-3 sm:space-y-4">
          {/* Recent Activity */}
          <Card className="border-0 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
            <CardHeader className="pb-2 sm:pb-3">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Activity className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="truncate">Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {recentActivity.map((activity, index) => (
                <ActivityItem key={index} activity={activity} index={index} />
              ))}
            </CardContent>
          </Card>

          {/* Global Distribution */}
          <Card className="border-0 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
            <CardHeader className="pb-2 sm:pb-3">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Globe className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span className="truncate">Global Projects</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {globalStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${stat.color} flex-shrink-0`} />
                    <span className="text-xs text-slate-600 dark:text-slate-400 truncate">{stat.region}</span>
                  </div>
                  <span className="text-xs font-medium text-slate-900 dark:text-white flex-shrink-0">
                    {stat.projects}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default DataDashboard