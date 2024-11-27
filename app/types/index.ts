export interface ButtonProps {
  id: string;
  title: string;
  leftIcon?: React.ReactNode;
  containerClass: string;
  rightIcon?: React.ReactNode;
}


export interface AnimatedTitleProps {
  title: string;
  containerClass: string;
}

export interface BentoCardProps {
  src: string;
  title: React.ReactNode;
  description: string;
  isComingSoon?: boolean;
}

export interface BentoTiltProps {
  children: React.ReactNode;
  className: string;
}

export interface ImageClipBoxProps {
  src: string;
  clipClass: string;
}
