import type { BracketUnit } from "./unit.ts";
import type { PlainText } from "./plainText.ts";

/** Anchor埋め込み */
export interface Anchor {
  type: "anchor-fm";

  /** 構文解析結果 */
  unit: AnchorUnit;

  /** the same as `unit.content` */
  children: PlainText;
}

export interface AnchorUnit extends BracketUnit {
  /** Anchor video ID */
  videoId: string;

  /** the username of Anchor video ID */
  username: string;
}
