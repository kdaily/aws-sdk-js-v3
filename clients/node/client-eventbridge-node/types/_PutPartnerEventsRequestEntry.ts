/**
 * <p>The details about an event generated by an SaaS partner.</p>
 */
export interface _PutPartnerEventsRequestEntry {
  /**
   * <p>The date and time of the event.</p>
   */
  Time?: Date | string | number;

  /**
   * <p>The event source that is generating the evntry.</p>
   */
  Source?: string;

  /**
   * <p>AWS resources, identified by Amazon Resource Name (ARN), that the event primarily concerns. Any number, including zero, can be present.</p>
   */
  Resources?: Array<string> | Iterable<string>;

  /**
   * <p>A free-form string used to decide which fields to expect in the event detail.</p>
   */
  DetailType?: string;

  /**
   * <p>A valid JSON string. There is no other schema imposed. The JSON string can contain fields and nested subobjects.</p>
   */
  Detail?: string;
}

export interface _UnmarshalledPutPartnerEventsRequestEntry
  extends _PutPartnerEventsRequestEntry {
  /**
   * <p>The date and time of the event.</p>
   */
  Time?: Date;

  /**
   * <p>AWS resources, identified by Amazon Resource Name (ARN), that the event primarily concerns. Any number, including zero, can be present.</p>
   */
  Resources?: Array<string>;
}