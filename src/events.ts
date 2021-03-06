/**
 * These types are copied directly from lib.dom.d.ts with simple case changes.
 */
export interface InactiveEventHandlers {
  /**
   * Fires when the user aborts the download.
   * @param ev The event.
   */
  onAbort: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
  onAnimationCancel:
    | ((this: GlobalEventHandlers, ev: AnimationEvent) => any)
    | null;
  onAnimationEnd:
    | ((this: GlobalEventHandlers, ev: AnimationEvent) => any)
    | null;
  onAnimationIteration:
    | ((this: GlobalEventHandlers, ev: AnimationEvent) => any)
    | null;
  onAnimationStart:
    | ((this: GlobalEventHandlers, ev: AnimationEvent) => any)
    | null;
  onAuxClick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /**
   * Fires when the object loses the input focus.
   * @param ev The focus event.
   */
  onBlur: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
  onCancel: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when playback is possible, but would require further buffering.
   * @param ev The event.
   */
  onCanPlay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onCanPlayThrough: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when the contents of the object or selection have changed.
   * @param ev The event.
   */
  onChange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when the user clicks the left mouse button on the object
   * @param ev The mouse event.
   */
  onClick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onClose: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when the user clicks the right mouse button in the client area, opening the context menu.
   * @param ev The mouse event.
   */
  onContextMenu: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onCueChange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when the user double-clicks the object.
   * @param ev The mouse event.
   */
  onDblClick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /**
   * Fires on the source object continuously during a drag operation.
   * @param ev The event.
   */
  onDrag: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  /**
   * Fires on the source object when the user releases the mouse at the close of a drag operation.
   * @param ev The event.
   */
  onDragEnd: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  /**
   * Fires on the target element when the user drags the object to a valid drop target.
   * @param ev The drag event.
   */
  onDragEnter: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  onDragExit: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
   * @param ev The drag event.
   */
  onDragLeave: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  /**
   * Fires on the target element continuously while the user drags the object over a valid drop target.
   * @param ev The event.
   */
  onDragOver: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  /**
   * Fires on the source object when the user starts to drag a text selection or selected object.
   * @param ev The event.
   */
  onDragStart: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  onDrop: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
  /**
   * Occurs when the duration attribute is updated.
   * @param ev The event.
   */
  onDurationChange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the media element is reset to its initial state.
   * @param ev The event.
   */
  onEmptied: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the end of playback is reached.
   * @param ev The event
   */
  onEnded: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when an error occurs during object loading.
   * @param ev The event.
   */
  onError: OnErrorEventHandler;
  /**
   * Fires when the object receives focus.
   * @param ev The event.
   */
  onFocus: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
  onGotPointerCapture:
    | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
    | null;
  onInput: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onInvalid: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when the user presses a key.
   * @param ev The keyboard event
   */
  onKeyDown: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
  /**
   * Fires when the user presses an alphanumeric key.
   * @param ev The event.
   */
  onKeyPress: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
  /**
   * Fires when the user releases a key.
   * @param ev The keyboard event
   */
  onKeyUp: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
  /**
   * Fires immediately after the browser loads the object.
   * @param ev The event.
   */
  onLoad: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when media data is loaded at the current playback position.
   * @param ev The event.
   */
  onLoadedData: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the duration and dimensions of the media have been determined.
   * @param ev The event.
   */
  onLoadedMetadata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when Internet Explorer begins looking for media data.
   * @param ev The event.
   */
  onLoadStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onLostPointerCapture:
    | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
    | null;
  /**
   * Fires when the user clicks the object with either mouse button.
   * @param ev The mouse event.
   */
  onMouseDown: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onMouseEnter: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  onMouseLeave: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /**
   * Fires when the user moves the mouse over the object.
   * @param ev The mouse event.
   */
  onMouseMove: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /**
   * Fires when the user moves the mouse pointer outside the boundaries of the object.
   * @param ev The mouse event.
   */
  onMouseOut: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /**
   * Fires when the user moves the mouse pointer into the object.
   * @param ev The mouse event.
   */
  onMouseOver: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /**
   * Fires when the user releases a mouse button while the mouse is over the object.
   * @param ev The mouse event.
   */
  onMouseUp: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
  /**
   * Occurs when playback is paused.
   * @param ev The event.
   */
  onPause: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the play method is requested.
   * @param ev The event.
   */
  onPlay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the audio or video has started playing.
   * @param ev The event.
   */
  onPlaying: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onpointercancel:
    | ((this: GlobalEventHandlers, ev: PointerEvent) => any)
    | null;
  onPointerDown: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onPointerEnter: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onPointerLeave: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onPointerMove: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onPointerOut: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onPointerOver: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  onPointerUp: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
  /**
   * Occurs to indicate progress while downloading media data.
   * @param ev The event.
   */
  onProgress: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
  /**
   * Occurs when the playback rate is increased or decreased.
   * @param ev The event.
   */
  onRateChange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when the user resets a form.
   * @param ev The event.
   */
  onReset: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onResize: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
  /**
   * Fires when the user repositions the scroll box in the scroll bar on the object.
   * @param ev The event.
   */
  onScroll: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onSecurityPolicyViolation:
    | ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any)
    | null;
  /**
   * Occurs when the seek operation ends.
   * @param ev The event.
   */
  onSeeked: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the current playback position is moved.
   * @param ev The event.
   */
  onSeeking: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Fires when the current selection changes.
   * @param ev The event.
   */
  onSelect: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onSelectionchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onSelectstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when the download has stopped.
   * @param ev The event.
   */
  onStalled: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onSubmit: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs if the load operation has been intentionally halted.
   * @param ev The event.
   */
  onSuspend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs to indicate the current playback position.
   * @param ev The event.
   */
  onTimeUpdate: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onToggle: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onTouchCancel?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
  onTouchEnd?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
  onTouchMove?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
  onTouchStart?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
  onTransitionCancel:
    | ((this: GlobalEventHandlers, ev: TransitionEvent) => any)
    | null;
  onTransitionEnd:
    | ((this: GlobalEventHandlers, ev: TransitionEvent) => any)
    | null;
  onTransitionRun:
    | ((this: GlobalEventHandlers, ev: TransitionEvent) => any)
    | null;
  onTransitionStart:
    | ((this: GlobalEventHandlers, ev: TransitionEvent) => any)
    | null;
  /**
   * Occurs when the volume is changed, or playback is muted or unmuted.
   * @param ev The event.
   */
  onVolumeChange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  /**
   * Occurs when playback stops because the next frame of a video resource is not available.
   * @param ev The event.
   */
  onWaiting: ((this: GlobalEventHandlers, ev: Event) => any) | null;
  onWheel: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null;
}
