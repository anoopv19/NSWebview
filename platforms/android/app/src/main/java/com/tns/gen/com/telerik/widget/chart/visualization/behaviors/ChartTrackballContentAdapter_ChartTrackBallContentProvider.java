/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.com.telerik.widget.chart.visualization.behaviors;

public class ChartTrackballContentAdapter_ChartTrackBallContentProvider extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider,
        com.telerik.widget.chart.visualization.behaviors.ChartTrackballContentAdapter
            .ChartTrackBallContentProvider {
  public ChartTrackballContentAdapter_ChartTrackBallContentProvider() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public java.lang.String resolveContentForDataPoint(
      com.telerik.widget.chart.engine.dataPoints.DataPoint param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    return (java.lang.String)
        com.tns.Runtime.callJSMethod(
            this, "resolveContentForDataPoint", java.lang.String.class, args);
  }

  public android.view.View resolveCustomViewForDataPoint(
      com.telerik.widget.chart.engine.dataPoints.DataPoint param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    return (android.view.View)
        com.tns.Runtime.callJSMethod(
            this, "resolveCustomViewForDataPoint", android.view.View.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
